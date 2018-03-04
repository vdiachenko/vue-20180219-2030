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
                        {{ props.id }}
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
import DataTable from '@/components/DataTable.vue'

export default {
    data: () => ({
        url: `${location.protocol}//${location.hostname}${
            process.env.NODE_ENV !== 'production' ? ':9000' : '/api'
        }/users`
    }),

    components: { DataTable }
}
</script>

<style lang="less" scoped>

</style>
