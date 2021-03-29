import http from 'src/services/http';

export const getListNodesInfo = async (publicKeys: string) => {
    const fakeParams =
        '121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,121..,';
    return new Promise((resolve, reject) => {
        http.post('stat', { mpk: fakeParams })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
};
