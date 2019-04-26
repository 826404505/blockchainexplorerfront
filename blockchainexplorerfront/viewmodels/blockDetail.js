var app = new Vue({
    el: '#app',
    data: {
        blockDetail:''
    },
	// 页面渲染完之后，自动执行mounted函数
    mounted() {
        console.log('view mounted');
        var url = new URL(location.href);
        //var height = url.searchParams.get("height");
        //console.log("height"+height);
        console.log(url);
        //this.getBlock();
    },
	methods: {
        //根据blockhash得到blockdetail
        getBlock(blockhash) {
            axios.get('http://localhost:8080/block/getBlockDetailByHash', {
                params: {
                    blockhash: this.blockhash
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.blockDetail = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
	}
})