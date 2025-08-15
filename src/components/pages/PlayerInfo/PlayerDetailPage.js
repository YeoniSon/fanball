import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerProfile from "../../features/playerInfo/playerDetail/PlayerProfile";
import SessionRecord from "../../features/playerInfo/playerDetail/SeasonMainRecord";
import RecordSelectBar from "../../features/playerInfo/playerDetail/RecordSelectBar";

const PlayerDetailPage = () => {
  const { playerId } = useParams();
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/mockPlayers.json");
        const data = await res.json();
        const list = Array.isArray(data?.players) ? data.players : [];
        const found = list.find((p) => String(p.playerId) === String(playerId));
        if (isMounted) setPlayer(found || null);
      } catch (e) {
        if (isMounted) setError("데이터를 불러오지 못했습니다.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, [playerId]);

  if (loading) return <div>불러오는 중...</div>;
  if (error) return <div>{error}</div>;
  if (!player) return <div>선수 정보를 찾을 수 없습니다.</div>;

  return (
    <div>
      <PlayerProfile player={player} />
      <SessionRecord player={player} />
      <RecordSelectBar />
    </div>
  );
};

export default PlayerDetailPage;
