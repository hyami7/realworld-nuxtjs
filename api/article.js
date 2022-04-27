import { request } from "@/plugins/request";

export const getArticles = (params) => {
  return request({
    method: "get",
    url: "/api/articles",
    params,
  });
};

export const getFeedArticles = (params) => {
  return request({
    method: "get",
    url: "/api/articles/feed",
    params,
  });
};

// 点赞
export const addFavorite = (slug) => {
  return request({
    method: "post",
    url: `/api/articles/${slug}/favorite`,
  });
};

// 取消点赞
export const deleteFavorite = (slug) => {
  return request({
    method: "delete",
    url: `/api/articles/${slug}/favorite`,
  });
};

// 获取文章详情
export const getArticle = (slug) => {
  return request({
    method: "get",
    url: `/api/articles/${slug}`,
  });
};

// 获取文章评论
export const getComments = (slug) => {
  return request({
    method: "get",
    url: `/api/articles/${slug}/comments`,
  });
};
