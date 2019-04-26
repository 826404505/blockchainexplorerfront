var app = new Vue({
    el: '#app',
    data: {
        blockDetail:'',
        height:''
    },
	// 页面渲染完之后，自动执行mounted函数
    mounted() {
        console.log('view mounted');
        var url = new URL(location.href);
        this.height = url.searchParams.get("height");
        this.blockhash = url.searchParams.get("blockhash");
        console.log("height"+height);
        console.log(url);
        //this.getBlockByHeight();
        this.getBlockByBlockhash();
    },
	methods: {
        //根据height得到height
        getBlockByHeight() {
            axios.get('http://localhost:8080/block/getBlockDetailByHeight', {
                params: {
                    height: this.height
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.blockDetail = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        //根据blockhash得到blockdetail
        getBlockByBlockhash() {
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