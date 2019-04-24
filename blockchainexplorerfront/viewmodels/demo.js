var app = new Vue({
    el: '#app',
    data: {
    },
	// 页面渲染完之后，自动执行mounted函数
    mounted() {
        console.log('view mounted');
        this.getWithPageAndName();
    },
	methods: {
		getWithPageAndName() {
            axios.get('', {
                params: {
                    pageNum: this.pageNum,
                    name: this.keyword
                }
            })
                .then(function (response) {
                    console.log(response);
                    //把查回来的数据赋值给pageInfo然后传到页面
                    app.pageInfo = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
		//模糊查询
        handleSearch() {
            this.pageNum = 1;
            this.getWithPageAndName();
        },
        //分页的,传回来的是分页数据
        handleChangePage(val) {
            console.log(val);
            this.pageNum = val;
            //分页玩再调用列表功能
            this.getWithPageAndName();
        },
	}
})