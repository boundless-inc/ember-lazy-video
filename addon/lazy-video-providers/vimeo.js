import { promise } from 'rsvp';

export default {
  apiUrl(videoId) {
    return `//vimeo.com/api/oembed.json?url=http%3A//vimeo.com/${videoId}`;
  },
  embedUrl(videoId) {
    return `//player.vimeo.com/video/${videoId}`;
  },
  thumbnailUrl(videoId) {
    let apiUrl = this.apiUrl(videoId);
    return new promise((resolve) => {
      $.getJSON(apiUrl).then((res) => {
        resolve(res.thumbnail_url);
      });
    });
  }
};
