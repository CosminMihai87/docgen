import { useReducer, useCallback } from 'react';
import axios from '../shared/axiosInstance';
import createFolderStructureReducer from './reducers/createFolderStructureReducer';

const DocgenServices = () => {

    const [createFolderStructureState, dispatchCreateFolderStructure] = useReducer(createFolderStructureReducer, {
        loading: false,
        error: ''
    });

    // const createFolderStructure = useCallback(chatSessionID => {
    //     dispatchGetUpdate({ type: 'GET_UPDATE_START' });
    //     const qs = require('qs');
    //     const requestBody = qs.stringify({
    //         site_name: config.url.site_name,
    //         responseType: 'JSON',
    //         action: 'GETUPDATE'
    //     });
    //     const requestHeader = {
    //         headers: {
    //             'X-JSESSIONID': chatSessionID,
    //             'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //         }
    //     };
    //
    //     axios
    //         .post("http://localhost:3100/createFolderStructure", requestBody, requestHeader)
    //         .then(response => {
    //             // console.log(response.data.responses[0].getResponseTypes);
    //             dispatchGetUpdate({
    //                 type: 'GET_UPDATE_SUCCESS',
    //                 averageWaitSeconds:
    //                 response.data.responses[0].getResponseTypes[0].averageWaitSeconds,
    //                 averageWaitTimeSamples:
    //                 response.data.responses[0].getResponseTypes[0]
    //                     .averageWaitTimeSamples,
    //                 chatSessionID: response.data.responses[0].sessionId,
    //                 chatMessageType:
    //                 response.data.responses[0].getResponseTypes[0].chatMessageType,
    //                 position: response.data.responses[0].getResponseTypes[0].position,
    //                 name: response.data.responses[0].getResponseTypes[0].name,
    //                 greeting: response.data.responses[0].getResponseTypes[0].greeting,
    //                 body: response.data.responses[0].getResponseTypes[0].body,
    //                 sequenceNumber:
    //                 response.data.responses[0].getResponseTypes[0].sequenceNumber,
    //                 serviceStartTime: new Date(
    //                     response.data.responses[0].serviceStartTime
    //                 ).toLocaleTimeString(),
    //                 serviceFinishTime: new Date(
    //                     response.data.responses[0].serviceFinishTime
    //                 ).toLocaleTimeString()
    //             });
    //         })
    //         .catch(error => {
    //             dispatchChatSession({
    //                 type: 'CHAT_SESSION_FAIL',
    //                 dispatchGetUpdate({
    //                                       type: 'GET_UPDATE_FAIL',
    //                                       error: error.message
    //                                   });
    //         });
    //         }, [globalContext]);
    // }, []);


    return {
        createFolderStructure: createFolderStructure,
        createFolderStructureState: createFolderStructureState
    };

};

export default DocgenServices;