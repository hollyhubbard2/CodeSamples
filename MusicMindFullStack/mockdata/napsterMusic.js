goForFetch = () => {
    this.setState({
        fromFetch: true,
        loading: true,

    })
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson)
            setTimeout(() => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            }, 2000)

        })
        .catch(error => console.log(error))
}

goForAxios = () => {
    this.setState({
        fromFetch: false,
        loading: true,

    })
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log('getting data from axios', response.data);
            setTimeout(() => {
                this.setState({
                    loading: false,
                    axiosData: response.data
                })
            }, 2000)
        })
        .catch(error => {
            console.log(error);
        });
}