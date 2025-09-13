import MyCard from "./components/MyCard";
import NewSongForm from "./components/NewSongForm";
import QueueTable from "./components/QueueTable";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",        // fill the viewport
        background: "#301934",        // black background
        color: "#fff",             // make text readable
        padding: 20
      }}
    >
      
      <MyCard
        title="Welcome to the Song Request Booth"
        text="Add your favorite songs below and watch them appear in the queue!"
      />

      <hr style={{ margin: "20px 0" }} />

      <NewSongForm />

      <div></div>
      

      <hr style={{ margin: "20px 0" }} />

      <QueueTable />
    </div>

    
  );
}
