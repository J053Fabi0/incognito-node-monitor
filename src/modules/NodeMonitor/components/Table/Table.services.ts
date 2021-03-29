import http from 'src/services/http';

export const getListNodesInfo = async (publicKeys: string) => {
    return http.post('stat', { mpk: publicKeys });
};
