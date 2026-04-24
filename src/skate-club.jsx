import { useState } from "react";

const APP_NAME = "長野原スケートクラブ";

const initialMembers = [
  { id: 1, name: "福嶋 新", grade: "中2", role: "部員", number: "01" },
  { id: 2, name: "渡辺 逸輝", grade: "中2", role: "部員", number: "02" },
  { id: 3, name: "坂本 有希奈", grade: "中1", role: "部員", number: "03" },
  { id: 4, name: "田中 湊翔", grade: "小6", role: "部員", number: "04" },
  { id: 5, name: "黒岩 美洸", grade: "小6", role: "部員", number: "05" },
  { id: 6, name: "土屋 寧音", grade: "小6", role: "部員", number: "06" },
  { id: 7, name: "関口 涼介", grade: "小5", role: "部員", number: "07" },
  { id: 8, name: "福嶋 寛太", grade: "小5", role: "部員", number: "08" },
  { id: 9, name: "岩田 篤弥", grade: "小5", role: "部員", number: "09" },
  { id: 10, name: "黒岩 晄太", grade: "小
