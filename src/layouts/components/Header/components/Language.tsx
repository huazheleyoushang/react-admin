import { Dropdown } from "antd";
import { connect } from "react-redux";
import { setLanguage } from "@/store/modules/global/action";

const Language = (props: any) => {
	const { language, setLanguage } = props;

	const items = [
		{
			key: "1",
			label: <span>简体中文</span>,
			onClick: () => setLanguage("zh"),
			disabled: language === "zh"
		},
		{
			key: "2",
			label: <span>English</span>,
			onClick: () => setLanguage("en"),
			disabled: language === "en"
		}
	];
	return (
		<Dropdown menu={{ items }} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(Language);
