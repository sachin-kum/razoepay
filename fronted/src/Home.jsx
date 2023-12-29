import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import axios from "axios";

const imgurl = `http://13.52.16.160:8082/media/professional_profile_image/sachin.png`;

const Home = () => {
  let img =
    "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png";
  let img2 =
    "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b";

  const checkoutHanlder = (amount) => {
    
    // const { data } = await axios.get("http://localhost:5500/api/getkey");
    axios
      .post("http://localhost:5500/api/checkout", { amount: amount })
      .then((res) => {
        console.log(res?.data?.status);
        if (res?.data?.status == true) {
          const options = {
            key: "rzp_test_nNk6ez71YtdmOF",
            amount: res?.data?.order?.amount,
            currency: "INR",
            name: "Sachin KUmar Swami",
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/125179617?v=4",
            order_id: res?.data?.order?.id,
            callback_url: "http://localhost:5500/api/paymentverification",
            prefill: {
              name: "Saachin Kumar",
              email: "sachinswaminbt@gmail.com",
              contact: "7877722306",
            },
            notes: {
              address: "Jaipur",
            },
            theme: {
              color: "#754be7",
            },
          };
          console.log(options);
          var razor = new window.Razorpay(options);
          razor.open();
        }

        // document.getElementById("rzp-button1").onclick = function (e) {
        //   rzp1.open();
        //   e.preventDefault();
        // };
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box>
      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Card amount={5000} img={img} checkoutHanlder={checkoutHanlder} />
        <Card amount={3000} img={img2} checkoutHanlder={checkoutHanlder} />
      </Stack>
    </Box>
  );
};

export default Home;
