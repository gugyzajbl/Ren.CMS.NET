using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using NHibernate.Mapping.ByCode.Conformist;
using NHibernate.Mapping.ByCode;
using Ren.CMS.CORE.nhibernate.Domain;


namespace Ren.CMS.CORE.nhibernate.Mapping {

    [Ren.CMS.CORE.nhibernate.Base.PersistenceMapping]
    public class GlobalSettingMap : ClassMapping<GlobalSetting> {
        
        public GlobalSettingMap() {
			Table(Ren.CMS.CORE.Config.RenConfig.DB.Prefix.Replace("dbo.", "") +"Global_Settings");
			Schema("dbo");
			Lazy(true);
			Property(x => x.Id, map => map.NotNullable(true));
			Property(x => x.SettingName, map => map.NotNullable(true));
			Property(x => x.SettingValue, map => map.NotNullable(true));
			Property(x => x.ContentType);
			Property(x => x.SType, map => map.Column("s_type"));
        }
    }
}
