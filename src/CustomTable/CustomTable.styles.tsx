import styled from 'styled-components';
import tokens from '@fcc/tokens';

export const Table = styled.table`
    border-collapse: collapse;
    text-align: left;
`;

export const TableHead = styled.thead`
    border-bottom: 1px solid ${tokens.color.primary.seattle.c10};
`;

export const TableBody = styled.tbody`
    tr:not(:last-child) {
        border-bottom: 1px solid ${tokens.color.primary.seattle.c10};
    }
    tr:hover {
        background: ${tokens.color.primary.seattle.c05};
    }
`;

export const TableRow = styled.tr`
    background: ${tokens.color.primary.brand.white};
`;

export const TableData = styled.td`
    font-family: ${tokens.typography.b.family};
    font-size: ${tokens.typography.b.b2.size}px;
    font-weight: ${tokens.typography.weight.normal};
    line-height: ${tokens.typography.b.b2.height}px;
    padding: ${tokens.layout.size.s2}px;
`;

export const TableHeader = styled.th`
    font-family: ${tokens.typography.b.family};
    font-size: ${tokens.typography.b.b2.size}px;
    font-weight: ${tokens.typography.weight.medium};
    line-height: ${tokens.typography.b.b2.height}px;
    padding: ${tokens.layout.size.s2}px;
    color: ${tokens.color.primary.seattle.c60};
`;
