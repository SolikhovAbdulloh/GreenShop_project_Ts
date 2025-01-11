import { useParams } from "react-router-dom";
import { useQueryApi } from "../../../../../hooks/useQuery";
import { CardType } from "../../../../../@types";
import { Collapse, Image, Rate} from "antd";
import Panel from "antd/es/splitter/Panel";

const SearchComponent: React.FC = () => {
    
    const { id, category } = useParams<{ id: string; category: string }>();
    
    const { data, isLoading }: { data?: CardType[] | any; isLoading: boolean } =
    useQueryApi({
        pathname: "category",
        url: `/flower/category/${category}/${id}`,
    });
    
    console.log(data);
    

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="w-90% px-8 my-6 flex justify-between">
          <div className="flex gap-[30px]">
            <div className="flex flex-col  gap-2 items-start">
              {data.detailed_images.map((e: string, idx: number) => (
                <Image
                  key={idx}
                  className="!w-[100px] !h-[100px]"
                  src={e}
                  alt="ok"
                />
              ))}
            </div>
            <div>
              <Image
                className="!w-[400px] !h-[400px]"
                src={data.main_image}
                alt="okey"
              />
            </div>
          </div>
          <div className="flex gap-3 flex-col w-[40%]">
            <p className="text-[28px] font-bold">{data.title}</p>
            <p className="text-[22px] flex justify-between font-bold text-[#50a861]">
              {data.price}{" "}
              <span>
                <Rate defaultValue={data.rate} />
              </span>
            </p>

            <p className="text-[14px] font-normal">
              <span className="text-[15px] font-bold">Short Description: </span>
              {data.description.length > 100
                ? data.description.substring(0, 300) + "..."
                : data.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export { SearchComponent };
