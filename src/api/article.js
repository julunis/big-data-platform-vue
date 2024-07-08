import request from "@/utils/request.js";

export const articleCategoryListService = () => {
    //在pinia中定义的响应式数据，都不需要.value
    return request.get("/category");
};

//添加文章分类
export const articleCategoryAddService = (categoryModel) => {
    return request.post("/category", categoryModel);
};

//修改分类
export const articleCategoryUpdateService = (categoryModel) => {
    return request.put("/category", categoryModel);
};

//删除分类
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id='+id)
}

//文章列表查询
export const articleListService = (params) => {
    return request.get('/article', { params: params })
}

//添加文章
export const articleAddService = (articleModel)=>{
    return request.post('/article',articleModel)
}