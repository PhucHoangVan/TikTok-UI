
import * as request from '~/utils/request';

export const search = async (q, type='less') => {
    try {
        const res = await request.get('users/search', {
            params: { q, type },
        });
        return res.data;
    } catch {
        // handle error
        throw new Error('Fail to fetch api search !!!')
    }
};

