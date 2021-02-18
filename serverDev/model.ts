//地理坐标封装
interface locationPoint {
    x: number;
    y: number;
    //表示哪个地区
    area?: string;
}

//推荐系统用的用户数据模型建立
interface UserForRecommand {
    id: string;
    //tags is the array of user what like, the array will save the tag number not the tag name.
    tags: number[];
    //实时位置
    location_now: locationPoint;
    //交通工具
    transportation: string;
    //实时时间,用于判断推荐什么时候的美食，比如早餐、午餐等
    time_now: Date;
    
}