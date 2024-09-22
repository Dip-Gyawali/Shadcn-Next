"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  async function getData() {
    const res = await fetch("http://45.117.153.85:8002/api/v1/frontend/post");
    if (!res.ok) {
      console.log("error");
    }
    console.log(res);
    const data = await res.json();
    console.log(data);
  }
  useEffect(()=>{
    getData()
  },[])
  return <div></div>;
}
