export default async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://frontiercodingtests.azurewebsites.net/api/accounts/getall');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }