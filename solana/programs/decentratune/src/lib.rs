use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount, MintTo, Transfer};

declare_id!("CxxDgNvpPUcY8hWy8KAEcV4Wnm2TGEu9G4Y1fCATar5e");

#[program]
pub mod nft_holder {
    use super::*;

    pub fn create_and_sell_nfts(
        ctx: Context<CreateAndSellNFTs>,
        total_amount: u64,
        sell_amount: u64,
    ) -> Result<()> {
        require!(sell_amount <= total_amount, ErrorCode::InvalidAmounts);

        let bump = ctx.bumps.mint_authority;

       for _ in 0..total_amount {
            let cpi_accounts = MintTo {
                mint: ctx.accounts.mint.to_account_info(),
                to: ctx.accounts.user_token_account.to_account_info(),
                authority: ctx.accounts.mint_authority.to_account_info(),
            };
            let cpi_program = ctx.accounts.token_program.to_account_info();
            let signer_seeds = &[b"mint_authority".as_ref(), &[ctx.bumps.mint_authority]];
            let cpi_ctx = CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(),
                cpi_accounts,
                &[&signer_seeds[..]],
            );            
            token::mint_to(cpi_ctx, 1)?;
        }

        // Переводим часть NFT на PDA программы для продажи
        if sell_amount > 0 {
            let cpi_accounts = Transfer {
                from: ctx.accounts.user_token_account.to_account_info(),
                to: ctx.accounts.program_token_account.to_account_info(),
                authority: ctx.accounts.user.to_account_info(),
            };
            let cpi_program = ctx.accounts.token_program.to_account_info();
            let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
            token::transfer(cpi_ctx, sell_amount)?;
        }

        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateAndSellNFTs<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,

    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub program_token_account: Account<'info, TokenAccount>,

    /// PDA authority для минтинга
    #[account(
        seeds = [b"mint_authority"],
        bump
    )]
    pub mint_authority: UncheckedAccount<'info>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub token_program: Program<'info, Token>,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Invalid amounts provided")]
    InvalidAmounts,
}