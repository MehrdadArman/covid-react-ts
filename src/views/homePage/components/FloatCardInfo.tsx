import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FloatCardInfo = () => {
  return (
    <div className=" fixed left-5 bottom-5">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Information</CardTitle>
        </CardHeader>
        <CardContent>
          <h5>Click on a country to view covid data.</h5>
        </CardContent>
      </Card>
    </div>
  );
};

export default FloatCardInfo;
