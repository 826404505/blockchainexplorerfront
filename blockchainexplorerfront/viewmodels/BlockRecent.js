var app = new Vue({
    el: '#app',
    data: {
        recentBlocks: [],
        keyword:''
    },
    // 页面渲染完之后，自动执行mounted函数
    computed: {
        showRecentBlocks(){
            var now = Date.now();
            this.recentBlocks.forEach(block => {
                //block.showtime = parseInt((now - block.time)/1000/60);
                block.showtime = block.time;
                block.showSizeOnDisk = block.sizeOnDisk.toLocaleString('en');
            });
            return this.recentBlocks;
        }
    },
    mounted() {
        console.log('view mounted');
        this.getBlockRecent();
    },
    methods: {
        getBlockRecent() {
            axios.get('http://localhost:8080/block/getRecentBlocks')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    app.recentBlocks = response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
        handleClick(block) {
            console.log(block);
            location.href = "BlockDetail.html?blockhash=" + block.blockhash;
        },
        //根据keyword查询block
        handleSearch(keyword){
            console.log(keyword);

        },

    }
})