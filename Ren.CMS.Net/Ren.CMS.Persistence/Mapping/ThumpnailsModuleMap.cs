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
    public class ThumpnailsModuleMap : ClassMapping<ThumpnailsModule>
    {
        #region Constructors

        public ThumpnailsModuleMap()
        {
            Table(Ren.CMS.CORE.Config.RenConfig.DB.Prefix.Replace("dbo.", "") +"Thumpnails_Module");
            Schema("dbo");
            Lazy(true);
            Property(x => x.Id, map => map.NotNullable(true));
            Property(x => x.AtID, map => map.NotNullable(true));
            Property(x => x.LastModification, map => map.NotNullable(true));
            Property(x => x.Path);
            Property(x => x.Width);
            Property(x => x.Height);
        }

        #endregion Constructors
    }
}