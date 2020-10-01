import { delegateInit } from './BaseShape';
import { Rectangle } from './Rectangle';

const ENTITY_FIELD_NAME = 'DebuggerStatement';

export default delegateInit(Rectangle, ENTITY_FIELD_NAME);
