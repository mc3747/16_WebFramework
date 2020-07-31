import React,{useState, useEffect } from "react";
import { ListView } from "antd-mobile";
const data = [
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel1",
      des: "不是所有的兼职汪都需要风吹日晒",
      header: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel2",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel3",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel4",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel5",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel6",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel7",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel8",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
      title: "Meet hotel9",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
      title: "McDonald's invites you10",
      des: "不是所有的兼职汪都需要风吹日晒"
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
      title: "Eat the week11",
      des: "不是所有的兼职汪都需要风吹日晒"
    }
  ];

const Home = ()=> {
  console.log('波波')
  const [loading, setLoading] = useState(true);

  const ds = new ListView.DataSource({
    rowHasChanged: () => true
  });
  const [dataSource, setDataSource] = useState(ds);

  useEffect(() => {
    setDataSource(dataSource.cloneWithRows([...data]));
  }, []);

  const onRequestMore = ()=> {
      console.log('加载更多')
    setDataSource(dataSource.cloneWithRows([...data, ...data]));
  }

  const renderItem = (rowData, sectionID, rowID) => {
    return (
      <div key={rowID} style={{ padding: "0 15px" }}>
        <div
          style={{
            lineHeight: "50px",
            color: "#888",
            fontSize: 18,
            borderBottom: "1px solid #F6F6F6"
          }}
        >
          {rowData.title}
        </div>

        <div
          style={{ display: "-webkit-box", display: "flex", padding: "15px 0" }}
        >
          <img
            style={{ height: "64px", marginRight: "15px" }}
            src={rowData.img}
            alt=""
          />
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
              {rowData.des}
            </div>
            <div>
              <span style={{ fontSize: "30px", color: "#FF6E27" }}>35</span>¥{" "}
              {rowID}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (

    <ListView
      loading={false}
      dataSource={dataSource}
      renderRow={renderItem}
      initialListSize={20}
      pageSize={20}
      useBodyScroll={true}
      onScroll={() => { console.log('scroll'); }}
      onEndReached={onRequestMore}
      onEndReachedThreshold={50}
      style={{
        height: "100%",
        backgroundColor:'red',
        overflow: 'inherit !important' 
      }}
      renderFooter={() => (<div style={{height:50, padding:5, textAlign: 'center',fontSize:'14px' }}>我是</div>)}
    />
  );
}
export default Home;