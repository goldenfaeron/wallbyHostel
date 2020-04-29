<template>
    <div>
        <Welcome></Welcome>
    </div>
</template>
<script>
export default {
    Welcome: () => import("@/components/insta/Welcome"),
}
</script>