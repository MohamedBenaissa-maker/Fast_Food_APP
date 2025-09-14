import { Redirect, Slot } from "expo-router";
import React from "react";

export default function _layout() {
  const isAuthenticted = false;

  if (!isAuthenticted) return <Redirect href="/(auth)/sign-in" />;

  return <Slot />;
}
