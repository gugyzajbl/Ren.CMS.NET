using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using NHibernate.Mapping.ByCode.Conformist;
using NHibernate.Mapping.ByCode;
using Ren.CMS.CORE.nhibernate.Domain;


namespace Ren.CMS.CORE.nhibernate.Mapping {

    [Ren.CMS.CORE.nhibernate.Base.PersistenceMapping]
    public class ContentAttachmentMap : ClassMapping<ContentAttachment> {
        
        public ContentAttachmentMap() {
			Table("nfcms_Content_Attachment");
			Schema("dbo");
			Lazy(false);
			//Property(x => x.Pkid, map => map.NotNullable(true));
            Id<Guid>(x => x.Pkid, map =>
                {
                    map.Generator(Generators.Guid);
                    map.Column("PKID");

                });


			Property(x => x.Nid, 
                map =>{
                    map.NotNullable(true);
                        map.Column("NID");
                });
			Property(x => x.AttachmentType, map => { map.Column("attachment_type"); map.NotNullable(true); });
			Property(x => x.ContentType, map => { map.Column("content_type"); map.NotNullable(true); });
			Property(x => x.FPath, map => map.Column("fPath"));
			Property(x => x.FName, map => map.Column("fName"));
			Property(x => x.ThumpNail, map => map.Column("thumpNail"));
			Property(x => x.AttachmentArgument);
			Property(x => x.ATitle, map => map.Column("aTitle"));
            Property(x => x.AttachmentRemarks, map => map.Column("AttachmentRemarks"));
        }
    }
}
