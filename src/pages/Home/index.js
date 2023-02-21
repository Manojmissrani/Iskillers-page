import React from "react";
import { Navbar, Bottonnavbar } from "../../components";
import "./index.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="back">
        <div className="main-header-1">
          <div className="aboutmain">
            <div className="imgdiv">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/fivePoints.png?alt=media&token=33ddfcb1-14d4-42b3-9b8c-983c7e0cebad"
                className="imgabout"
              />
            </div>
            <div className="aboutheading">
              <h1>
                <span>Welcome</span> to iSkillers
              </h1>
              <div className="bottonline aboutline"></div>

              <p className="aboutmessage">
                The world around us is changing every minute, globalizing, and
                the speed of information exchange and its volume are steadily
                increasing. A person who wants to keep up with the times,
                understand the new global trends in the development of science
                and technology, must have curiosity, be active and have
                analytical thinking and leadership qualities. But in addition,
                in order to be competitive he needs to have a huge amount of
                knowledge and skills, including professional ones. The high pace
                of scientific and technological progress and the wide spread of
                information technologies leads to the fact that any area of
                activity is constantly enriched with new discoveries, methods
                and techniques of work. We offer only programs that will help
                you climb a few steps higher in your life. All areas in which we
                work are in demand and relevant. We use only the latest proven
                and reliable methods of trainings. We do not have boring
                lectures. Our trainers use an interactive approach that
                significantly improves the efficiency of training and know all
                modern training methods. New knowledge is an empowerment of you
                and a chance to make your life better, brighter and more
                diverse.
              </p>
            </div>
          </div>
        </div>

        <div className="main-header-1">
          <div className="aboutmain">
            <div className="aboutheading">
              <h1>
                <span>Training</span> Program Mission
              </h1>
              <div className="bottonline aboutline"></div>

              <p className="aboutmessage">
                The iSkillers is looking to the future. It is founded with the
                aim of giving everyone who strives for self-realization the
                knowledge that will take him to a new, higher level, and give
                him more self-confidence, as well as help him to achieve success
                in his profession and career. We focus on the latest approaches
                to training, the most modern, innovative technologies.
              </p>
            </div>
            <div className="imgdiv">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/mission-31294f6bdb0ed986e741820eb8804e3e.png?alt=media&token=82390a1b-f86f-40a1-b525-4c828a3bab71"
                className="imgabout"
              />
            </div>
          </div>
        </div>

        <div className="main-header-1">
          <div className="aboutmain">
            <div className="imgdiv">
              <h1>
                <span>Reasons</span> to learn at iSkillers
              </h1>
              <div className="bottonline aboutline"></div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/mobile-app-01-b078af88857286111b34b8114af39ced.png?alt=media&token=4bb3d80f-23b2-4e17-abb7-ce43a137407e"
                className="imgabout"
              />
            </div>
            <div className="aboutheading">
              <div className="uldivimage">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA3lBMVEUAAAAnO4kpPI8pPJAqOpEkSZIpOpApO5ApOpEiM4gpO5ApO5ApO5AmOY4pO5EpO5ApOpEsOI8oPI0pO5ApO5ApOpApPI8oPI8pO5ApPJAAVaoqO5ApO5ApPJEcOY4oO48pO5AqPI8tPJYoPJAsPo0pOo8qO44oO5AzM5kpO5AoPJArPZIpO5ApO5ApO48oO5EoOo8pO5ApO5AuRospO5ApO5ApO5AmOZMpO48kN5IpO5AgQJ8nPY8pO5ApPJEpOpApPY8pO5ApO5ApO5AkN5IqO5AqO5ArK4ApO5AAAAASTqolAAAASHRSTlMADYmnYQev5XYP9fGKG8L5nSkm8v6zRFnMXgOf3G8J0OiAEZEdoivpCtSeKvT8ZF9g5/sL1ficKKAc2wg7w/CIGa3kdQ6BpQYvpG8jAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QMDw0UM0U0K3MAAAGASURBVFjDzdfZUsJAEAXQUeOGS9SAUSOIIrjEBfddVFD7/79IrFCC0DN9p/Og/d63UucGaIz58xkbnwgm8wRMEdH0zKw+oEDfMze/oA1YpGzCpWVdwErUS6BiaVWVEFN/1tY3FAnJQAJtliveAZWtwQSqbu/oGbKJars5GLJK6o0cDJpKhhgUlQwz+FcSEzt7eCUJn4BXwjJ4VcIz+FQSk2OgShJXAlKJnQGtxMEAVhKTNFIliZggVCIxyJWIDGIlMoNUCcDgrmT/AE2g8DDlEtIjOIGOT7iEUzyAqlxA0yPgjNlvFPD982B0/+ISXr+6vmEe4BZdj2p3HECA6lleJBDgvvzAv4YYgOPDBAAUS4/GOjJAWE/t6zKABR4FEE8PN4AVHgMAflgcAE54GcANLwII8BIAfPPxADK8E8DnyBoFgODtACC8DQCFtwD4H9u/AHB4FkDzh6MP4Af/M0+9df47HpjsAZ5bL7p1Y16762/tjna9ew68fzQ/9ev/YL4AVXyrt7xNkMUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTVUMTM6MjA6NTErMDA6MDB2jny5AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE1VDEzOjIwOjUxKzAwOjAwB9PEBQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                  alt=""
                />
                <p className="aboutmessage">
                  Our students receive not just specialized, but primarily
                  professional knowledge that expands their horizons and allows
                  them to take a worthy place in the ranks of professionals.
                </p>
              </div>

              <div className="uldivimage">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA3lBMVEUAAAAnO4kpPI8pPJAqOpEkSZIpOpApO5ApOpEiM4gpO5ApO5ApO5AmOY4pO5EpO5ApOpEsOI8oPI0pO5ApO5ApOpApPI8oPI8pO5ApPJAAVaoqO5ApO5ApPJEcOY4oO48pO5AqPI8tPJYoPJAsPo0pOo8qO44oO5AzM5kpO5AoPJArPZIpO5ApO5ApO48oO5EoOo8pO5ApO5AuRospO5ApO5ApO5AmOZMpO48kN5IpO5AgQJ8nPY8pO5ApPJEpOpApPY8pO5ApO5ApO5AkN5IqO5AqO5ArK4ApO5AAAAASTqolAAAASHRSTlMADYmnYQev5XYP9fGKG8L5nSkm8v6zRFnMXgOf3G8J0OiAEZEdoivpCtSeKvT8ZF9g5/sL1ficKKAc2wg7w/CIGa3kdQ6BpQYvpG8jAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QMDw0UM0U0K3MAAAGASURBVFjDzdfZUsJAEAXQUeOGS9SAUSOIIrjEBfddVFD7/79IrFCC0DN9p/Og/d63UucGaIz58xkbnwgm8wRMEdH0zKw+oEDfMze/oA1YpGzCpWVdwErUS6BiaVWVEFN/1tY3FAnJQAJtliveAZWtwQSqbu/oGbKJars5GLJK6o0cDJpKhhgUlQwz+FcSEzt7eCUJn4BXwjJ4VcIz+FQSk2OgShJXAlKJnQGtxMEAVhKTNFIliZggVCIxyJWIDGIlMoNUCcDgrmT/AE2g8DDlEtIjOIGOT7iEUzyAqlxA0yPgjNlvFPD982B0/+ISXr+6vmEe4BZdj2p3HECA6lleJBDgvvzAv4YYgOPDBAAUS4/GOjJAWE/t6zKABR4FEE8PN4AVHgMAflgcAE54GcANLwII8BIAfPPxADK8E8DnyBoFgODtACC8DQCFtwD4H9u/AHB4FkDzh6MP4Af/M0+9df47HpjsAZ5bL7p1Y16762/tjna9ew68fzQ/9ev/YL4AVXyrt7xNkMUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTVUMTM6MjA6NTErMDA6MDB2jny5AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE1VDEzOjIwOjUxKzAwOjAwB9PEBQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                  alt=""
                />
                <p className="aboutmessage">
                  We pay attention to practical exercises. The training
                  methodology developed by our trainers allows you to acquire
                  important professional skills in a fairly short time.
                </p>
              </div>

              <div className="uldivimage">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA3lBMVEUAAAAnO4kpPI8pPJAqOpEkSZIpOpApO5ApOpEiM4gpO5ApO5ApO5AmOY4pO5EpO5ApOpEsOI8oPI0pO5ApO5ApOpApPI8oPI8pO5ApPJAAVaoqO5ApO5ApPJEcOY4oO48pO5AqPI8tPJYoPJAsPo0pOo8qO44oO5AzM5kpO5AoPJArPZIpO5ApO5ApO48oO5EoOo8pO5ApO5AuRospO5ApO5ApO5AmOZMpO48kN5IpO5AgQJ8nPY8pO5ApPJEpOpApPY8pO5ApO5ApO5AkN5IqO5AqO5ArK4ApO5AAAAASTqolAAAASHRSTlMADYmnYQev5XYP9fGKG8L5nSkm8v6zRFnMXgOf3G8J0OiAEZEdoivpCtSeKvT8ZF9g5/sL1ficKKAc2wg7w/CIGa3kdQ6BpQYvpG8jAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QMDw0UM0U0K3MAAAGASURBVFjDzdfZUsJAEAXQUeOGS9SAUSOIIrjEBfddVFD7/79IrFCC0DN9p/Og/d63UucGaIz58xkbnwgm8wRMEdH0zKw+oEDfMze/oA1YpGzCpWVdwErUS6BiaVWVEFN/1tY3FAnJQAJtliveAZWtwQSqbu/oGbKJars5GLJK6o0cDJpKhhgUlQwz+FcSEzt7eCUJn4BXwjJ4VcIz+FQSk2OgShJXAlKJnQGtxMEAVhKTNFIliZggVCIxyJWIDGIlMoNUCcDgrmT/AE2g8DDlEtIjOIGOT7iEUzyAqlxA0yPgjNlvFPD982B0/+ISXr+6vmEe4BZdj2p3HECA6lleJBDgvvzAv4YYgOPDBAAUS4/GOjJAWE/t6zKABR4FEE8PN4AVHgMAflgcAE54GcANLwII8BIAfPPxADK8E8DnyBoFgODtACC8DQCFtwD4H9u/AHB4FkDzh6MP4Af/M0+9df47HpjsAZ5bL7p1Y16762/tjna9ew68fzQ/9ev/YL4AVXyrt7xNkMUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTVUMTM6MjA6NTErMDA6MDB2jny5AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE1VDEzOjIwOjUxKzAwOjAwB9PEBQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                  alt=""
                />
                <p className="aboutmessage">
                  The training courses are conducted by trainers who are well
                  versed on the topic and are able to convey the necessary
                  information to each listener without going into special
                  terminology.
                </p>
              </div>

              <div className="uldivimage">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA3lBMVEUAAAAnO4kpPI8pPJAqOpEkSZIpOpApO5ApOpEiM4gpO5ApO5ApO5AmOY4pO5EpO5ApOpEsOI8oPI0pO5ApO5ApOpApPI8oPI8pO5ApPJAAVaoqO5ApO5ApPJEcOY4oO48pO5AqPI8tPJYoPJAsPo0pOo8qO44oO5AzM5kpO5AoPJArPZIpO5ApO5ApO48oO5EoOo8pO5ApO5AuRospO5ApO5ApO5AmOZMpO48kN5IpO5AgQJ8nPY8pO5ApPJEpOpApPY8pO5ApO5ApO5AkN5IqO5AqO5ArK4ApO5AAAAASTqolAAAASHRSTlMADYmnYQev5XYP9fGKG8L5nSkm8v6zRFnMXgOf3G8J0OiAEZEdoivpCtSeKvT8ZF9g5/sL1ficKKAc2wg7w/CIGa3kdQ6BpQYvpG8jAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QMDw0UM0U0K3MAAAGASURBVFjDzdfZUsJAEAXQUeOGS9SAUSOIIrjEBfddVFD7/79IrFCC0DN9p/Og/d63UucGaIz58xkbnwgm8wRMEdH0zKw+oEDfMze/oA1YpGzCpWVdwErUS6BiaVWVEFN/1tY3FAnJQAJtliveAZWtwQSqbu/oGbKJars5GLJK6o0cDJpKhhgUlQwz+FcSEzt7eCUJn4BXwjJ4VcIz+FQSk2OgShJXAlKJnQGtxMEAVhKTNFIliZggVCIxyJWIDGIlMoNUCcDgrmT/AE2g8DDlEtIjOIGOT7iEUzyAqlxA0yPgjNlvFPD982B0/+ISXr+6vmEe4BZdj2p3HECA6lleJBDgvvzAv4YYgOPDBAAUS4/GOjJAWE/t6zKABR4FEE8PN4AVHgMAflgcAE54GcANLwII8BIAfPPxADK8E8DnyBoFgODtACC8DQCFtwD4H9u/AHB4FkDzh6MP4Af/M0+9df47HpjsAZ5bL7p1Y16762/tjna9ew68fzQ/9ev/YL4AVXyrt7xNkMUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTVUMTM6MjA6NTErMDA6MDB2jny5AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE1VDEzOjIwOjUxKzAwOjAwB9PEBQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                  alt=""
                />
                <p className="aboutmessage">
                  We regularly modernize the database equipment, which allows to
                  ensure high efficiency of the educational process.
                </p>
              </div>

              <div className="uldivimage">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA3lBMVEUAAAAnO4kpPI8pPJAqOpEkSZIpOpApO5ApOpEiM4gpO5ApO5ApO5AmOY4pO5EpO5ApOpEsOI8oPI0pO5ApO5ApOpApPI8oPI8pO5ApPJAAVaoqO5ApO5ApPJEcOY4oO48pO5AqPI8tPJYoPJAsPo0pOo8qO44oO5AzM5kpO5AoPJArPZIpO5ApO5ApO48oO5EoOo8pO5ApO5AuRospO5ApO5ApO5AmOZMpO48kN5IpO5AgQJ8nPY8pO5ApPJEpOpApPY8pO5ApO5ApO5AkN5IqO5AqO5ArK4ApO5AAAAASTqolAAAASHRSTlMADYmnYQev5XYP9fGKG8L5nSkm8v6zRFnMXgOf3G8J0OiAEZEdoivpCtSeKvT8ZF9g5/sL1ficKKAc2wg7w/CIGa3kdQ6BpQYvpG8jAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QMDw0UM0U0K3MAAAGASURBVFjDzdfZUsJAEAXQUeOGS9SAUSOIIrjEBfddVFD7/79IrFCC0DN9p/Og/d63UucGaIz58xkbnwgm8wRMEdH0zKw+oEDfMze/oA1YpGzCpWVdwErUS6BiaVWVEFN/1tY3FAnJQAJtliveAZWtwQSqbu/oGbKJars5GLJK6o0cDJpKhhgUlQwz+FcSEzt7eCUJn4BXwjJ4VcIz+FQSk2OgShJXAlKJnQGtxMEAVhKTNFIliZggVCIxyJWIDGIlMoNUCcDgrmT/AE2g8DDlEtIjOIGOT7iEUzyAqlxA0yPgjNlvFPD982B0/+ISXr+6vmEe4BZdj2p3HECA6lleJBDgvvzAv4YYgOPDBAAUS4/GOjJAWE/t6zKABR4FEE8PN4AVHgMAflgcAE54GcANLwII8BIAfPPxADK8E8DnyBoFgODtACC8DQCFtwD4H9u/AHB4FkDzh6MP4Af/M0+9df47HpjsAZ5bL7p1Y16762/tjna9ew68fzQ/9ev/YL4AVXyrt7xNkMUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTVUMTM6MjA6NTErMDA6MDB2jny5AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE1VDEzOjIwOjUxKzAwOjAwB9PEBQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                  alt=""
                />
                <p className="aboutmessage">
                  Flexible schedule. Learn whenever it suits you. Weekdays,
                  Weekends, morning or evenings. We’ll adjust the schedule for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Bottonnavbar />
    </div>
  );
};

export default Home;
