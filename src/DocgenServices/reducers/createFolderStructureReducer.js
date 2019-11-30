import { updateObject } from '../../util/utility';

const initialState = {
    loading: false,
    error: ''
};

const createFolderStructureStart = ( state ) => {
    return updateObject( state, {
        loading: true
    } );
};

const createFolderStructureSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
    } );
};

const createFolderStructureFail = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        error: action.error
    } );
};

const createFolderStructureReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'CREATE_FOLDER_STRUCTURE_START': return createFolderStructureStart( state );
        case 'CREATE_FOLDER_STRUCTURE_SUCCESS': return createFolderStructureSuccess( state, action );
        case 'CREATE_FOLDER_STRUCTURE_FAIL': return createFolderStructureFail( state, action );
        default: return state;
    }
};

export default createFolderStructureReducer;