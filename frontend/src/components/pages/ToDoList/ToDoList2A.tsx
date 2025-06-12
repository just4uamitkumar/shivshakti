import { Box, Divider, Stack, Grid } from "@mui/material";
import TypoGraphy from "../../common/Typography";
import { useEffect, useState } from "react";

const ToDoList2A: React.FC = () => {
  const [string1, setString1] = useState<string>("");
  const [isParaDim, setIsParaDim] = useState<boolean>(false);
  const [string2, setString2] = useState<object>({
    firstStr: "",
    secondStr: "",
  });
  const [string3, setString3] = useState<object>({});
  const [string4, setString4] = useState<string>("");

  useEffect(() => {
    const mystr: string = "delhi is capital of india";

    setString1(reverseString(mystr));

    const paraDom: string = "amit";
    setIsParaDim(paraDomString(paraDom));

    const word: string = "this is india";
    setString2({
      firstStr: capitalLett(word).myStr1,
      secondStr: capitalLett(word).myStr2,
    });

    const str: string = "apppplleenccd";
    setString3(checkStringOccurence(str));
  }, []);

  useEffect(() => {
    setString4(mostFrequentValue(string3));
  }, [string3]);

  //Reverse a string
  const reverseString = (str: string) => {
    const myStr = str
      ?.split(" ")
      .map((item: string) => item.split("").reverse().join(""))
      .join(" ");
    return myStr;
  };

  //Capitilize first letter of a word
  const capitalLett = (str: string) => {
    const myStr1: string =
      str.split("")[0].charAt(0).toUpperCase() + str.substring(1);
    const myStr2: string = str
      .split(" ")
      .map((elem: string) => elem.charAt(0).toUpperCase() + elem.substring(1))
      .join(" ");
    return {
      myStr1,
      myStr2,
    };
  };

  //Paradimonal a string
  const paraDomString = (str: string) => {
    return str === str.split("").reverse().join("");
  };

  //check string occurence
  const checkStringOccurence = (str: string) => {
    const obj:unknown = {};
    str.split("").forEach((elem: string) => {
      obj.hasOwnProperty(elem) ? obj[elem]++ : (obj[elem] = 1);
    });
    return obj;
  };

  //Most frequest value in Array
  const mostFrequentValue = (myObj: object) => {
    const keyArr: string[] = Object.keys(myObj);
    const valueArr: string[] = Object.values(myObj);
    const newValArr: string[] = valueArr.map((e) => e);
    const hightstValue = newValArr.sort((a:string, b:string) => a - b)[valueArr.length - 1];
    const valueIndex:number = valueArr.indexOf(hightstValue);
    return `${keyArr[valueIndex]}  found ${hightstValue} times`;
  };
  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"String Problem 1"}
          </TypoGraphy>
        </Box>
        <Divider />

        <Box className="p-3">
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Show Reverse String"}
            </TypoGraphy>
            <Stack>{string1}</Stack>
          </Grid>
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Paridominal String"}
            </TypoGraphy>
            <Stack>{isParaDim ? "true" : "false"}</Stack>
          </Grid>
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Capitilize first letter"}
            </TypoGraphy>
            <Stack>{string2.firstStr}</Stack>
            <Stack>{string2.secondStr}</Stack>
          </Grid>
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Check String Occurence"}
            </TypoGraphy>
            <Stack>{Object.entries(string3)}</Stack>
            <Stack>{string4}</Stack>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ToDoList2A;
