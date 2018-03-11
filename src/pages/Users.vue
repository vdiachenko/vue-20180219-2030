<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Users List</h1>

            <data-table :url="url">
                <tr slot="head">
                    <th><abbr title="Position">#</abbr></th>
                    <th><abbr title="First Name">First Name</abbr></th>
                    <th><abbr title="Last Name">Last Name</abbr></th>
                    <th><abbr title="Age">Age</abbr></th>
                    <th><abbr title="Active">Active</abbr></th>
                    <th><abbr title="Balance">Balance</abbr></th>
                    <th><abbr title="E-mail">E-mail</abbr></th>
                    <th><abbr title="Phone">Phone</abbr></th>
                    <th><abbr title="Registered">Registered</abbr></th>
                </tr>

                <template slot="row" slot-scope="props">
                    <td>
                        <router-link :to="getUserUrl(props.id)" tag="a" exact>{{ props.id }}</router-link>
                    </td>

                    <td>
                        {{ props.firstName }}
                    </td>

                    <td>
                        {{ props.lastName }}
                    </td>

                    <td>
                        {{ props.age }}
                    </td>

                    <td>
                        {{ props.isActive }}
                    </td>

                    <td>
                        {{ props.balance }}
                    </td>

                    <td>
                        {{ props.email }}
                    </td>

                    <td>
                        {{ props.phone }}
                    </td>

                    <td>
                        {{ props.registered }}
                    </td>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        url: `${location.protocol}//${location.hostname}${
            process.env.NODE_ENV !== 'production' ? ':9000' : ''
        }/api/users`
    }),

    components: {
        'data-table': () => import('@/components/DataTable.vue')
    },

    methods: {
        getUserUrl(id) {
            return `/edit/${id}`
        }
    }
}
</script>

<style lang="less" scoped>

</style>
