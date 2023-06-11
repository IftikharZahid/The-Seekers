import { colors } from "./theme/designSystem";

const style = {
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  inputcontainer: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "gray",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  sortBtn: {
    width: 40,
    height: 40,
    marginLeft: 5,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryListContainer: {
    paddingVertical: 15,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  categoryBtn: {
    height: 40,
    width: 110,
    marginRight: 7,
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },

  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 210,
    width: 120,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: colors.white,
  },
};
export default style;
