namespace Ren.CMS.CORE.nhibernate.Mapping
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    using NHibernate.Mapping.ByCode;
    using NHibernate.Mapping.ByCode.Conformist;

    using Ren.CMS.CORE.nhibernate.Domain;

    [Ren.CMS.CORE.nhibernate.Base.PersistenceMapping]
    public class PermissionkeyMap : ClassMapping<Permissionkey>
    {
        #region Constructors

        public PermissionkeyMap()
        {
            Table(Ren.CMS.CORE.Config.RenConfig.DB.Prefix.Replace("dbo.", "") +"Permissionkeys");
            Schema("dbo");
            Lazy(true);
            Property(x => x.Pkey, map => map.NotNullable(true));
            Property(x => x.DefaultVal, map => map.NotNullable(true));
            Property(x => x.LangLine, map => map.NotNullable(true));
        }

        #endregion Constructors
    }
}