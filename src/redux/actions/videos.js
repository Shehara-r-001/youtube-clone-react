import request from '../../api';
import { HOME_VIDEOS_REQUEST } from '../actionType';

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const response = await request.get('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'US',
        pageToken: '',
        maxVideos: 20,
      },
    });

    console.log(response);
  } catch (error) {
    console.log('error : ', error);
  }
};
