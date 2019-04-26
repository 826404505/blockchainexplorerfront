var app = new Vue({
    el: '#app',
    data: {
        blockDetail:'',
        blockhash:''
    },
	// 页面渲染完之后，自动执行mounted函数
    mounted() {
        console.log('view mounted');
        var url = new URL(location.href);
        this.blockhash = url.searchParams.get("blockhash");
        console.log("blockhash"+blockhash);
        this.getBlock();
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