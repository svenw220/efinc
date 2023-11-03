<template>
    <div>
        <nav class="navbar bg-nav">
            <div class="header-left">
                <div>
                    <img class="logo" src="../assets/Logo.svg">
                </div>
                <div>
                    <p class="logo-content">YOUR ELECRTRONIC FINANCE COACH</p>
                </div>
            </div> 
            <div> 
                <a class="navbar-brand">Contact Us</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:"NavBar",
    components:{

    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    .navbar{
      padding: 20px 30px;
    }
    .navbar-brand{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #0B192C;
    }
    a:hover {
        color: #0B192C;
    }
    .bg-nav{
        background: #F6F7F9;
    }
    .logo-content{
        position: absolute;
        width: 169px;
        /* height: 24px; */
        line-height: 16px;
        top: 23.65px;
        font-size: 12px;
        left: 195.21px;
        color: #3991FF;
    }
    .logo{
        width: 165.17px;
        height: 36px;
        left: 30px;
        top: 20px;
        margin-left: 20px;
    }


    @media only screen and (max-width: 600px) {
        .navbar-brand{
            display: none;
        }
        .bg-nav{
            background: #FFFFFF;
        }
        .header-left{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .logo{
          align-content: center;
        }
        .logo-content{
            align-content: center;
            margin-bottom:  0 !important;
            position: inherit !important;
        }
    }
</style>