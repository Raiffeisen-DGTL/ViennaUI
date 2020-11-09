import * as Col from './Col';
import * as Row from './Row';

export const Grid: { Col: React.FC<Col.ColProps>; Row: React.FC<Row.RowProps> } = {
    Col: Col.Col,
    Row: Row.Row,
};

export default Grid;
