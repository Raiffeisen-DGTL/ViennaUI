import * as _Col from './Col';
import * as _Row from './Row';

export const Grid: { Col: React.FC<_Col.ColProps>; Row: React.FC<_Row.RowProps> } = {
    Col: _Col.Col,
    Row: _Row.Row,
};
