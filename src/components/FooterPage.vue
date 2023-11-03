<template>
    <div class="footer-class">
        <a class="footer-content" href="http://www.efinc.de/impressum" target="_blank"><u>Impressum</u></a>&nbsp;&nbsp;
        <a class="footer-content" href="http://www.efinc.de/datenschutz" target="_blank"><u>Datenschutz</u></a>&nbsp;&nbsp;
        <p class="footer-content">Version 0.1.0</p>&nbsp;&nbsp;
    </div>
</template>

<script>
export default {
    name:"FooterPage",
    components:{},
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    .footer-class{
        display: flex !important;
        justify-content: center;
        margin: 19% 0px 15px 0px;
    }

    .footer-content{
        color: rgba(0, 0, 0, 0.5) !important;
        font-weight: 400;
        font-size: 12px;
    }

@media only screen and (max-width: 600px) {

    .footer-class{
        margin: 70% 0px 15px 0px;
    }
    .footer-content{
        color: #9E9E9E;
    }

}
</style>