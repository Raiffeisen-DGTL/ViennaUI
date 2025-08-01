import styled from 'styled-components';
import { color, typography, layout } from 'vienna.tokens';

export const Table = styled.table`
    border-collapse: collapse;
    text-align: left;
`;

export const TableHead = styled.thead`
    border-bottom: 1px solid ${color.primary.seattle.c10};
`;

export const TableBody = styled.tbody`
    tr:not(:last-child) {
        border-bottom: 1px solid ${color.primary.seattle.c10};
    }
    tr:hover {
        background: ${color.primary.seattle.c05};
    }
`;

export const TableRow = styled.tr`
    background: ${color.primary.brand.white};
`;

export const TableData = styled.td`
    font-family: ${typography.b.family};
    font-size: ${typography.b.b2.size}px;
    font-weight: ${typography.weight.normal};
    line-height: ${typography.b.b2.height}px;
    padding: ${layout.size.s2}px;
`;

export const TableHeader = styled.th`
    font-family: ${typography.b.family};
    font-size: ${typography.b.b2.size}px;
    font-weight: ${typography.weight.medium};
    line-height: ${typography.b.b2.height}px;
    padding: ${layout.size.s2}px;
    color: ${color.primary.seattle.c60};
`;
