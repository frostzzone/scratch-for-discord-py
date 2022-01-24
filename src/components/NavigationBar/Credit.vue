<template>
        <b-nav-item @click="credit">{{ $t('Credit') }}</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
export default {
    name: "credit",
    methods: {
        credit() {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Androz, snowflake107 - original s4d\n7coil - Discord blocks',
                text: 'Scratch for discord PY is maintained by frostzzone',
                showConfirmButton: true
            })
        },
    }
}
</script>