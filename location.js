console.log("working")

navigator.geolocation.getCurrentPosition(
    (data) => {
        console.log(data.coords)

        document.getElementById("logger").innerHTML += "Location Coordinates: " + data.coords.latitude + " " + data.coords.longitude

        axios({
            url: `https://api.opencagedata.com/geocode/v1/json?key=195b1555711d428f8c35e9d5ee9da5a0&q=${encodeURIComponent(data.coords.latitude + "," + data.coords.longitude)}&pretty=1&no_annotations=1`,
            method: "GET"
        })
            .then((res) => {
                console.log(res.data.results[0].formatted)
                document.getElementById("logger").innerHTML += "<br>Location: " + res.data.results[0].formatted
            })
            .catch((err) => {
                console.log(err)
            })

    },
    (error) => {
        console.error(error)
    }
)