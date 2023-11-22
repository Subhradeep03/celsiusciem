import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { Container, Heading, Stack } from "@chakra-ui/react";
import EventCard from "../components/EventCard";
import alleventbg from "../assets/alleventbg.jpg";
import AllFooter from "../components/AllFooter";

const Technical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const technicalData = [
    {
      key: 1,
      title: "hackathon",
      image: "https://i.ibb.co/WVvcm1z/hackathon.png",
      genre: "tech",
    },
    {
      key: 2,
      title: "all terrain",
      image: "https://i.ibb.co/VjjmB5r/nitrocharge.png",
      genre: "tech",
    },
    {
      key: 3,
      title: "robo soccer",
      image: "https://i.ibb.co/bzK8Dbp/robocup.png",
      genre: "tech",
    },
    {
      key: 4,
      title: "codedrift 4.0",
      image: "https://i.ibb.co/grrqhvc/codedrift.png",
      genre: "tech",
    },
    {
      key: 5,
      title: "bridge building",
      image: "https://i.ibb.co/LPmBYL7/bridgebuilding.png",
      genre: "tech",
    },
    {
      key: 6,
      title: "line of control",
      image: "https://i.ibb.co/cCLS7Kb/loc.png",
      genre: "tech",
    },
    {
      key: 7,
      title: "treasure hunt",
      image: "https://i.ibb.co/vhjcvLw/treasurehunt.png",
      genre: "tech",
    },
    {
      key: 8,
      title: "model display",
      image: "https://i.ibb.co/gP1T1nM/model.png",
      genre: "tech",
    },
    {
      key: 9,
      title: "tech quiz",
      image: "https://i.ibb.co/tLSdHGk/techquiz.png",
      genre: "tech",
    },
    {
      key: 17,
      title: "rc car race",
      image:
        "https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/oscar/news/2022/robo-race3-800.png?sfvrsn=65946e11_2",
      genre: "tech",
    },
    {
      key: 18,
      title: "autocad drafting",
      image:
        "https://blog.scitraining.com/wp-content/uploads/2018/10/what-is-drafting-in-autocad.jpg",
      genre: "tech",
    },
    {
      key: 10,
      title: "mobile gaming",
      image: "https://i.ibb.co/7NcvNNj/mobilegaming.png",
      genre: "gaming",
    },
    {
      key: 11,
      title: "pc gaming",
      image: "https://i.ibb.co/ypvbrMt/pcgaming.png",
      genre: "gaming",
    },
    {
      key: 12,
      title: "ideathon",
      image: "https://i.ibb.co/W3tQGrS/ideathon.png",
      genre: "business",
    },
    {
      key: 13,
      title: "debate",
      image: "https://i.ibb.co/cC6XJKj/debate.png",
      genre: "business",
    },
    {
      key: 14,
      title: "public speaking",
      image: "https://i.ibb.co/B3M0jvn/publicspeaking.png",
      genre: "business",
    },
    {
      key: 15,
      title: "group discussion",
      image:
        "https://i0.wp.com/www.iedunote.com/img/28442/focus-group-discussions.jpg",
      genre: "business",
    },
    {
      key: 16,
      title: "just a min",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRUZGhwYGRkaHRoYGhkaGh0cHBwYGhocIS4lHiErHxgcJzgmKy8xNTU1HSU7QDs0Py40NTEBDAwMEA8QHxISHjQnJSw0NDQ2NDQ0NDExNDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA8EAACAQIEAwYEBAQFBQEAAAABAgADEQQFEiExQVEGIjJhcYEHE5GhFEKxwSOCktFSYnKi8EOywuHxJP/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACcRAAICAgICAQQCAwAAAAAAAAABAhEDIRIxBEEyIlFhgRNxFMHx/9oADAMBAAIRAxEAPwDssREAREQBERAEREAREQBERAEREATFVqhQSTYCenYAXPASh9rO0ZGy30A2sN9XnIykoolGLbM+fdpb3RDYdeBMiMpD13IJ0oPESf0PWQL1xU3HPof+Wk7gEAQIOB4+frMc8tO2a8eBtaJWrmKi6UFG35juG62I5zXP4g76h6cuI3/WZsMgHDYTcRpBZm+zQsEUYqGYupsycdjefMTm9WnupCqTc3Gq3mP3m1fqJhq0gRY7g+8k80vRD+CJK5PnDOgLlWH+Jf3EnQZzLDO2GxGnf5VTYcwD6cpfcpxQdLfmXYjn6zTiyclsyZsXBkjERLigREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREGAQPavH/LpWBsW/Sc9ztiKK3NgwuFFufMnnLN2mrCpVsT3EsfU/wBpRe0+MvYHjwAHAATNkdvRowqj7ljD2lnwQFriVXJxqWw5cT0lmwJsbE/aYch6kOicRNhMgS3KfKHeG0zKl+Q2nYq9kW6PISfXWekPkPrPFdvIj7yTRG7ZG5zhddM28Q7y+REdnMzLKrAkOnddTtrA/cTaZ5XcIDSxJt4WO/Sxk8UqlorzxuJ1Sm9wCOYvPciMgxYdCt91P2kvPQTtHmNUIiJ04IiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCY699JtxsZkiAc+zpSpNwNzf9bzmedPqq26Gdw7R4JDSdrbgfUnYD1nGMbhgKmolbkltN9wASCSDvbuzNNUacTs2MHVdFsiFj+klsBm7Xs6keR2P9pGNm6J3e8xsL2XruB4p5w+Op1gTrYEEhSU0jUN9Ie9ibEbSh42/RuU4rVnScrxCst5nbg1usouXZylMC73Fr94aeB3sbncdNpaKWaoaOsMGF7dzvG/IEDhOJVqg6btEgGCgljyvz/aaLZlTJIBO0jamaa+CXF7d5gPYbzbw9QEXdEVR5g/cQ42uiS07Zmdr2Km4MxHBB2BJsRwPQzKjIGKqRwva4uPbpI5sazmyX3JFxzPCMaUW7Ks9taLVkzj5p6kcetusscrnZnBsBrfjy8/OWOb49Hmy7EREkREREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAKr8RsW1PA1HU2YMlj/Op/aUXH4AFKJtZnRXa3Wot2tfl3gJZvipigKCUjwclmHUINh/Uw+kpuY4x2TC6WtfDUrnjvpGr9Jny9s14I0k/ue0yPvB9AI4bbEW7t7c+Bkrg8joKj2pC7izb2PXYnhymLKa2J0hRXBHIOitb0Ox+8lmSq3jqiw37iKvrxJmZT46s3uF1aRzmqP4oT8gcIt9zvYEk89p0XG4QLRR1VQUZTewHcvZrkb2tv7SnYqmj4mmiDYMHJ/wAVze/nOk1qQKqpAKlbMDwOriCIct2car9lazLIla6o1nIOi7DSCbb779ftNSlkOIpIG1Fql9LopJQoFsWJbiSwvbzlmp4V0AACVlXZQ5KuoHAFwCGsLcQD5zOtd9x+HcerU2Uf7r/aWc1TK3uSf/CtYDEl1RAv5ramudJ9iDwB57yf7P5TdwGsdB3NrXtvw5eLqZ4wGXlCoYjiTYDmeZPW2318pZMmQAtwubn72/aRxK5JEfJkuLaJShSCqAOEyQIm88wREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQDSzHLKVdQtamtRQbgML2PUTk3b2mqYkqoCqAAoAAAAA2AHnedmnFPiRUviGPR2U+1rH7yrItF2GTUjDkeK3tNvtVjmWkURrEgX626SC7Mgmto56dQ9IzDHg1CX8JNt+QmJx+o9WM1xVn3srmitXX5tgUWynhffznUnxiEL6cBck+wnPsFkWGdg1RHQcjZ0B/mtaXXLmw6LoQobcO8CbeZ4mTcSt/nf9Hmvj9DU3AOiodBuCpDHdSQeF7Eb87SVbEgi4kP2hQPQcL4gA49UIYf9s8YTEXRT1EpcuJPgmkyVokswA3N9vWTeW4ZlJZha4ta9zIrs9T1VNXJRf3O0s81+PC1yZg8nI+Tij0IiRWd48UkJL6NtRawNlBUMRq7o8Q3bYC55TUZCVvEhcprsxBDs1NlJ7+ksrAi26AXVgb7+XWTIMA+xEQBERAEREAREQBERAEREAREQBERAEREARMNeuqDUzKoHNiFH1MreYdvsDSuPm626UwW/3eH7ztN9Cy1T5ecvzD4rgbUaHvUb/wAV/vKlm/b7GV7j5ppqfy07p/uB1feS4SOWd3rYpE8bov8AqYL+pkdiu0+Dp+PE0h5a1Y/Rbmfm7E4lmN2Ys3Ukk/UzV+YZFqgdg7W/ExApTCHUSDqqkEW8kUjc+ZnN8Rj2qIhJJOlbkm5LKNLG/na8hGqbSUNO1Gk44aSG9SSRK8j0kW4tOy29madsXRPJqBP0/wDshO1mBOlXVjs7Bh01eFtuXdIk12frA1MI999D0z6gKf2M9V3KVQpFxZgVO4NmJ9+P3MyJ1I9RRUo8fuYcg7SZjQU+GspvZag8LG24ZbHgLW4SbxPaLFvRJ/DYZSqgkd5tQUHYX4Tay+nhmVtmU6SNKi6DYDUBa435Tfr0lIAQEagAW0qgtuG0r4rkHidhLrtWceHHF1TsrXZbE16lCq9VSEYn5Q3sAdtK330gnnLN8sIqrw0qPtGIRVRUUAKpUADkBI7Ns0WnTZ29AOZJ4CZH9c+KRP4Q30i+dmaVqWq27G/tykzKVkfxBwLhULGiwAAVx3f6x3fraWTHZqlNFcnUrsFUrYgkgnjwtsd56KjwjT9HkSbnLXbJEyvZ9avTemilmAYGpq+WiEghgXsSdjYqAehtNqrmCuFpglXqbDqFAuzKR5C1+pE9NSVF1ELT0jQCW7oXlfgOJ9Z1NNaItOLplRGCxWFwjJRRGdlv81HLPpW23y2UG1r7qTYtex4yZ7IZoaiKHa7EE7m5vtvxNtryWyx1amn8RGbQo1IQd9IuQLm244bznvaOoMJjlqrrFF0BK6bDWz2a45FrMb2426yqaaqS9F2KpJwfv2dTFRb2uL9LzJKThs6plu6SG42N1YX4Gxlky/H6goPE852OVSdDJglBWSUREtKBERAEREAREQBERAEREARE+NAMOKxKU1LuwVFFySbACc67Q/E1VumFW54fMcbeqpxPqfpKt267UviahQHTSRiFUHxEHxt1PTpKa7y2MF2yNkjmmdVq7aqtRnP+Y3A9BwHsJGtUmJjPBaWWcMpeeGaeC0+NOUATMQHOemM96O6JFxtkrNZpYMCuvDBelx7gn+8gWEm+z7X1IePiHvx+8zziycHs+YDMmpMl/wAlTV9QVadArUErIH57nboe8CPqfrKPmeA6jeb/AGezo0h8tz3eCseHoeky5I2rR6GDJTqRccDlga1jf+0k0wZTifpIjDZqqb8vY29xxHnM2Jz0MLLuTwA3P0G8z7qjZKX50M1xoXa/n7c5QO0mYl30bgJcEcO/wO3lw+s6Ll+T6T+JxJ8I1in00969TzHJfrOP4nEl3dzxd3c+rsWP6zb4mHi+UjzvK8jkuMej6zzbwOb1adkR2CFlYpc6SVNwdPC9+c0WNxMKtuPWbsm1TMUG1JNejuWCzlWXDVmIAVyjnhZXQrqv66TLvhyNOkqFvcKpYNqHG841ltNnwboo8VMEeTCxkfknbrGYW1LUHVbBFqJqKjgVDghgNud5gxS7TN3k4k6lE7nUCKoGkITwIUMFA5k2sBOdZ1Sq4rFI4X/86VqY1EgM6UyruwTobED1O1rSLyftW2Kq/JxNRKVIk6KaA00Zr8KrXLcOV7EjflLpXzXC0ipZ0LAWVVtc26It9hJSnfRXjwNbaK3nPZrEYjGviVqqoLAINyVRAAFI24kE7HmZdcjw7qV1kGwubCwJ4bb8N+cjsBn5qk6aNQDkSjKD5jUBeTWAxOpwtipF7g7cpVGnOy/I5KHGtUTcRE1nnCIiAIiIAiIgCIiAIiIAmOse63of0mSYsQmpWXqCPqLTqDPzDin77X6n9ZrO3OZ8zQq7KeIJB9Rx+81EblLU9tEa0fGM83i8+GSWzgn0TzPonSR8IvM5mOnufSZTCRFs13WbGAq6HV+QIv6Tw6T4vC3WRlGzqkdqyfJqeIpAlQbzFmPw7paSwdksOViPSx2mL4W5kXUUybta/wBBY/pHxHoVzXWzkoaZZE8IBU94HfvX85ilFJNmjFcpqLdL7lMbs7UTwken8M/dXP6ToPZnLaFOkHTv1ODO1tSHiVABIXbmOI5yNwyaqIdhY6eflIDJcyqUq+ogjD1zoB4AkXCuB63HoZWtOzf5GBRx8oyv/ZJ/ELOtGGZFPfqHR7Xu/wDtFvecoDSe7b40viNN9kH3Y3P2AkPgMDUrNppIzt/l4D1Y7D3M0xlSs8zjb0eQZ4tLvlvw4ruAXqInkAXP12EtOV9gcNTI1qarczU3H9A2/WJeRGtbLY4JXvRF9hjeknvces0u0WThKrNpHeBvyIHMe86Nhcso0tgiIvRVUbjjwEr3abCGpqFIEi/Pp/6MxSTTbR6ONrUWc5weVPiamhBvzJ4KOFz/AMvOndlezq4Um9ix8TnY+m/D0lWw+UV8P/FpsyvwBHO/IjnvIzO8Vii5R6jkCxKqdIsfJZzkmS4fY67RzzCliq1Eupse8OMkcHWU1Fa/jBCjyUXLfoPcTj3Z/K0Y95C4axDobOPY+L23nU8gwtNCui5YjSWfUz2tfTd7lRcXsNtpZjlcjLnx8Y6LPERNZ54iIgCIiAIiIAiIgCIiAJ8M+z4YB+dPiDhQmOrhfDruB01AMR9SZVg0uXxGQrjsQrc3DL6Mikf29pT3WWNe0RXQfcX5wDefFnng1uRk0/Z09GfJ7nmSInrDju367zLeawBXccOY/tNhHBF4T9Bo+mYhxntjPKzrCOj/AAjJ/EORsqUzq/mIsPrv7S7duqY/hv0Dge4vKj8I1BTF28emntz09/f6zf7c5j8z8NQ/Mw1N73H/AImY8qSTL8MHkmoo3MBQ14IUz/1HFMEcg5sWB5WFzNftVlikoEGlUK6F4ABbbfQTXxOOGFpJUsCyN3Rw13BUr9CZsZU5xA1uSWPE+Z5DpM0pcVXs2/4sovi3aRVcN2PDvUrV21d5mCLfTx2DHiduQlxwmBRERVUKvCwAULuRy67byU/B2HdUnb/lpG5jRxCi6Jc3tbUq8eZJlUpSfZZCMY6RMNmCUlJey+pAA9fKUvPviEim1LvkH8osv9XA+15YsuypyL1AtzvbdvaUz4nZbh6Ip6aKpVc3DJcKVUWbUB3b7r5y3GlLTIZXxtpqzcyTtHWxTXeyqfyrff1MvOW4YHkOk5T2Eqcha45fWdXyzEgqTcC19+ljYn9pHSk0dbbgmesfSVADYEg2ReN36+glPzXLzrZxu6WY89Skd/1IuPvLHjMVqa6+FRYeQ/8AexnpcJqtbjpYq3ncH9h9JVL6paLMb4q5Gpl+U0nAe2k7HUndv6jgfcS0ZXSJYkm6rsDwJPp6c5HPUWmhbZVUFieQHEke0lezlYvh6bkW+YusC1rKxuoI66SJrxQ9mXyMreiViIl5iEREAREQBERAEREAREQBPhn2DAOR/GbBJqo1Af4hVlZeqLaz+xYj38pyljOhfGGs/wCMA/KKS6fctc/Wc5L+0npURR9P3niqdvMbz1q6wyXHGSq1o6e6TXE+sLTXoGxI6TZbcScXaOM8kz6gtvbjPtJNTAEgXNhfYep8pM5jl1KlS8atVJ23tcf5FVjcce82ny4iRlNKSTOqLashbwTPGqeWaJSOJF2+F2ZfLxugnu1abp/Mo1r/ANhHvM1fFipjGcsNKKDqPBRzv6fvKbk2LNPEUnHFXB/Y/YmSLMdT7+JifUcpkzS2a/Fk4PklslMxzMYmug3FJD3Qedt2YjkT05C3nJ/Icx0swVu6Lbep22lOw9PSdR2vcD0manUZHV7bBlJ6NYzHK5PRuxya3L2dqwdVmUEjbrymwqqOcjMrxhqoLHYWuPabOIpEjxEegH7yUXqyElcvsbNTFqovcATlfxazUu1GloYadVTURYMGGkBb8eBv7TpdNUG/E9TufrOa/FvHU2ajTG9VNTseiMAAvuRf285bjbcirNFKLK72Oq6XuDYjh535S54nNmQAKe67EnyIAsP1le7LZarUaTr4mqVqbf61RHT0uuv6iTn4MsCpHevce0rzR+t2T8eX0InsuxyuNPMAe8mlxLLay93/ABXFvbzlNyyiyve242+nkesu1CzKLiw6SEdFs6oqHbvOdNL5YBBqeLlZRa9/9R29jOmZC+rDUG60aZ+qKZyHt8oc0yijc10Tq4p/K3/r1gdZ2TLKGijTT/AiJ/SoH7T0YxrGvyeXldyZtxEQQEREAREQBERAEREAREQBNXMsWtKk9VvCis7eign9oidXZx9H5sz7N3xNV6tQ99muByVeSDoALSIIBiJYDxotwM9hfrESUUjjMFUEMD7TYRoicj8mPRko1mRgyMVYXsRbmLEbzFUckkk3J3JO5J6mIiRy2YS0BL8YiVki/djcpR8DiawF6iuiX5ql1ZgOmq4B8pG1cKWqm/AC5P7T5ExeR8/0ej4yX8f7MiKD3um1unpPVWiG7g4HgYiULs0+iXyDOflVlVvBYAnflwnR6dcVQGUd0jY8IiSiJpVYpoAd5Rfiw9E4dASBWDgoBa5U7N/Lax9QIiWw+Rny/FlP7HZqELU3JCOyPcblKlM3RwOfEqw5qeoE6FiabAisg10yLl07ygEcTbdfe0RLM8Va/oz4JNG/pVgpUamNtlFyfYSco5W7r3j8tLd7ezkcxf8AKLc+PpESvFFMszZGtI5D2rz8VcUr0rLSo6UoAcNKG4b+Y7+lp3fJsctehTrLwdFb0JG49jcRE3y+KMT7N+IiVgREQBERAEREA//Z",
      genre: "business",
    },
  ];

  const [filteredTechData, setFilteredTechData] = useState(technicalData);
  const [activeTab, setActiveTab] = useState("all"); // Set "All" as the default tab

  const filterByGenre = (genre) => {
    setActiveTab(genre);
    if (genre === "all") {
      setFilteredTechData(technicalData);
    } else {
      const filteredData = technicalData.filter(
        (event) => event.genre === genre
      );
      setFilteredTechData(filteredData);
    }
  };

  return (
    <div
      style={{
        background: `url(${alleventbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxW={"100vw"}
        id={"sports"}
        className={"events_wrapper"}
        paddingBottom={10}
        paddingTop={5}
      >
        <Navbar />
        <Heading
          className="sm:text-8xl text-6xl mt-10"
          color={"white"}
          paddingBottom={"10"}
          textAlign={"center"}
        >
          Technical
        </Heading>
        <div className="w-full my-5">
          <div className="sm:flex sm:flex-row sm:justify-evenly my-10 grid grid-cols-2 gap-2 p-4">
            <div
              className={`tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => filterByGenre("all")}
            >
              All
            </div>
            <div
              className={`tab ${activeTab === "tech" ? "active" : ""}`}
              onClick={() => filterByGenre("tech")}
            >
              Technical
            </div>
            <div
              className={`tab ${activeTab === "gaming" ? "active" : ""}`}
              onClick={() => filterByGenre("gaming")}
            >
              Gaming
            </div>
            <div
              className={`tab ${activeTab === "business" ? "active" : ""}`}
              onClick={() => filterByGenre("business")}
            >
              Business
            </div>
          </div>
        </div>
        <Stack
          className="sm:px-5"
          direction={["column", "row"]}
          wrap={"wrap"}
          justifyContent={"space-evenly"}
          alignContent={"center"}
          rowGap={"30px"}
        >
          {filteredTechData.map((item) => (
            <EventCard key={item.key} title={item.title} image={item.image} />
          ))}
        </Stack>
      </Container>
      <AllFooter />
    </div>
  );
};

export default Technical;
