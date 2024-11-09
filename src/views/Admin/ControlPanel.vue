<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
    const users = ref({})
    const listings = ref({})
    const reports = ref({})
    const activeButton = ref("")
    function getUsers() {
        activeButton.value="usersList"
        document.getElementById("tabUsers").hidden = false
        document.getElementById("tabListings").hidden = true
        document.getElementById("tabReports").hidden = true
        axios.get("https://localhost:7075/Api/Authentication/List")
        .then(res => {
            users.value = res.data;
        })
    }

    function getListings() {
        activeButton.value="listingsList"
        document.getElementById("tabUsers").hidden = true
        document.getElementById("tabListings").hidden = false
        document.getElementById("tabReports").hidden = true
        axios.get("https://localhost:7075/Api/JobListings/List")
        .then(res => {
            listings.value = res.data;
        })
    }
    
    function getReports() {
        activeButton.value="reportsList"
        document.getElementById("tabUsers").hidden = true
        document.getElementById("tabListings").hidden = true
        document.getElementById("tabReports").hidden = false
        axios.get("https://localhost:7075/Api/Reports/List")
        .then(res => {
            reports.value = res.data;
        })
    }
</script>
<template>
    <h1 class="center">Admin Control Panel</h1>
    <div class="btn-group d-flex">
        <button id="btnUsersList" @click="getUsers()" :class="['btn','btn-primary','flex-grow-1', {active: activeButton === 'usersList'}]">users list</button>
        <button id="btnListingsList" @click="getListings()" :class="['btn', 'btn-primary', 'flex-grow-1', {active: activeButton === 'listingsList'}]">listings list</button>
        <button id="btnReporstList" @click="getReports()" :class="['btn', 'btn-primary', 'flex-grow-1' ,{active: activeButton === 'reportsList'}]">reports list</button>
    </div>
    <br>
    
    <table id="tabUsers" class="table-striped table-condensed table-fixed" style="width: 100%;" hidden="true">
        <thead>
            <tr>
                <th>User Id</th>
                <th>User Type</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>
                    {{ user.id }}
                </td>
                <td>{{ user.userType }}</td>
                <td>{{ user.userName }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <RouterLink :to="`/adminControlPanel/inspectUser/${user.id}`" class="btn btn-success">Inspect</RouterLink>
                </td>
                <td>
                    <RouterLink :to="`/adminControlPanel/deleteUser/${user.id}`" class="btn btn-danger">Delete</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>

    <table id="tabListings" class="table-striped table-condensed table-fixed" style="width: 100%;" hidden="true">
        <thead>
            <tr>
                <th>Listing Id</th>
                <th>Position</th>
                <th>Date Added</th>
                <th>Expiration Date</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="listing in listings" :key="listing.jobId">
                <td>{{ listing.jobId }}</td>
                <td>{{ listing.jobName }}</td>
                <td>{{ listing.dateAdded }}</td>
                <td>{{ listing.expirationDate }}</td>
                <td>
                    <RouterLink :to="`/adminControlPanel/inspectListing/${listing.jobId}`" class="btn btn-success">Inspect</RouterLink>
                </td>
                <td>
                    <RouterLink :to="`/adminControlPanel/deleteListing/${listing.jobId}`" class="btn btn-danger">Delete</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
    <table id="tabReports" class="table-striped table-condensed table-fixed" style="width: 100%;" hidden="true">
        <thead>
            <tr>
                <th>User Id</th>
                <th>Listing Id</th>
                <th>Reasons</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="report in reports" :key="report.reportId">
                <td>{{ report.userId }}</td>
                <td>{{ report.jobListingId }}</td>
                <td>{{ report.reasons }}</td>
                <td>
                    <RouterLink :to="`/adminControlPanel/inspectReport/${report.reportId}`" class="btn btn-success">Inspect</RouterLink>
                </td>
                <td>
                    <RouterLink :to="`/adminControlPanel/deleteReport/${report.reportId}`" class="btn btn-danger">Delete</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>

</template>
<style scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
/*
.table-fixed {
    width: 100%;
}

.table-fixed thead,
.table-fixed thead>th {
    background: #6C757D;
    color: #fff;
}

.table-fixed tbody tr td {
    background: #fff;
}

.table-fixed>thead>tr>th {
    border: 0 !important;
}

.table-fixed>tbody>tr>td:last-child {
    border-right: 0;
}

.table-fixed tbody td,
.table-fixed thead>tr>th {
    float: left;
    font-size: 20px;
    padding-left: 20px !important;
}
/* .table-fixed 
.col {
    width: 25%;
}

.table-fixed tbody {
    display: inline;
    height: 100%;
    overflow-y: auto;
}

.table-fixed tr {
    display: inline;
}*/
</style>