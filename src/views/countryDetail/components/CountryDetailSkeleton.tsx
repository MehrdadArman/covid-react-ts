import { Skeleton } from "@/components/ui/skeleton";

const CountryDetailSkeleton = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <div className="bg-gray-200 shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {new Array(4).fill(0).map((_, index) => (
            <div className="flex flex-col space-y-3" key={index}>
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetailSkeleton;
