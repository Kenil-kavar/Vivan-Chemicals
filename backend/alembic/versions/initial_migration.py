"""Initial migration

Revision ID: initial
Revises: 
Create Date: 2025-11-08 22:00:00.000000

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'initial'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Create contact_us table
    op.create_table(
        'contact_us',
        sa.Column('id', sa.Integer, primary_key=True, index=True),
        sa.Column('name', sa.String, nullable=False),
        sa.Column('email', sa.String, nullable=False),
        sa.Column('phone', sa.String, nullable=True),
        sa.Column('message', sa.String, nullable=False),
        sa.Column('created_at', sa.DateTime, server_default=sa.func.now())
    )

    # Create free_sample table
    op.create_table(
        'free_sample',
        sa.Column('id', sa.Integer, primary_key=True, index=True),
        sa.Column('name', sa.String, nullable=False),
        sa.Column('email', sa.String, nullable=False),
        sa.Column('phone', sa.String, nullable=True),
        sa.Column('address', sa.String, nullable=False),
        sa.Column('product', sa.String, nullable=False),
        sa.Column('created_at', sa.DateTime, server_default=sa.func.now())
    )


def downgrade() -> None:
    op.drop_table('contact_us')
    op.drop_table('free_sample')
