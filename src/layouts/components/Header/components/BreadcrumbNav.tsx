import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const BreadcrumbNav = (props: any) => {
  const { pathname } = useLocation();
  const { themeConfig } = props.global;
  const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || [];

  return (
    <>
      {!themeConfig.breadcrumb && (
        <Breadcrumb
          items={breadcrumbList.map((item: string) => {
            return {
              title: item,
            };
          })}
        ></Breadcrumb>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => state;
export default connect(mapStateToProps)(BreadcrumbNav);
