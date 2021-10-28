import { useParams } from "react-router-dom";
// Components
import Header from "../../components/Header";
// Utils
import slugfiy from "../../utils/slugfiy";

export default () => {
  let { slug }: any = useParams();

  return (
    <div>
      <Header title={"Blog Detail - " + slugfiy.separate(slug)} />
      <p className="p-4 text-gray-500">
        Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Nec
        sagittis aliquam malesuada bibendum arcu vitae. Porttitor leo a diam
        sollicitudin tempor id eu nisl. Neque egestas congue quisque egestas
        diam in arcu cursus. Tincidunt tortor aliquam nulla facilisi cras
        fermentum odio eu feugiat. Consequat mauris nunc congue nisi. Lacinia at
        quis risus sed. Mi sit amet mauris commodo quis. Habitant morbi
        tristique senectus et netus et malesuada fames. Sodales neque sodales ut
        etiam. Malesuada proin libero nunc consequat interdum varius. Sem
        integer vitae justo eget magna. Sit amet consectetur adipiscing elit ut
        aliquam purus sit amet. Tincidunt dui ut ornare lectus sit amet est
        placerat in. Adipiscing enim eu turpis egestas pretium aenean. Nisl
        rhoncus mattis rhoncus urna neque. Purus in massa tempor nec. Quisque
        sagittis purus sit amet volutpat consequat mauris nunc.
      </p>
    </div>
  );
};
